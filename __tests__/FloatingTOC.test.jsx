import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import FloatingTOC from '../src/components/FloatingTOC';
import styles from '../src/components/FloatingTOC.module.css';

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn(() => ({
  observe: vi.fn(),
  disconnect: vi.fn(),
  unobserve: vi.fn(),
}));

// Mock scrollIntoView
Element.prototype.scrollIntoView = vi.fn();

const mockSections = [
  { id: 'section1', title: 'Section 1', level: 1 },
  { id: 'section2', title: 'Section 2', level: 1 },
  { id: 'subsection1', title: 'Subsection 1', level: 2 },
  { id: 'section3', title: 'Section 3', level: 1 }
];

describe('FloatingTOC Component', () => {
  beforeEach(() => {
    // Reset mocks
    vi.clearAllMocks();
    
    // Mock DOM elements for sections
    mockSections.forEach(({ id }) => {
      const element = document.createElement('div');
      element.id = id;
      document.body.appendChild(element);
    });
  });

  afterEach(() => {
    // Clean up DOM
    document.body.innerHTML = '';
  });

  it('renders TOC with provided sections', () => {
    render(<FloatingTOC sections={mockSections} />);
    
    // Check if TOC title is rendered (use getAllByText for multiple instances)
    const tocTitles = screen.getAllByText('Contents');
    expect(tocTitles.length).toBeGreaterThan(0);
    
    // Check if desktop TOC is rendered
    const desktopToc = document.querySelector(`.${styles.floatingTOC}`);
    expect(desktopToc).toBeInTheDocument();
    
    // Check if all sections are rendered (at least once)
    mockSections.forEach(({ title }) => {
      expect(screen.getAllByText(title).length).toBeGreaterThan(0);
    });
  });

  it('handles empty sections array gracefully', () => {
    const { container } = render(<FloatingTOC sections={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it('applies correct level classes to TOC links', () => {
    render(<FloatingTOC sections={mockSections} />);
    
    // Get desktop TOC links specifically
    const desktopToc = document.querySelector(`.${styles.floatingTOC}`);
    const level1Links = desktopToc.querySelectorAll(`.${styles.level1}`);
    const level2Links = desktopToc.querySelectorAll(`.${styles.level2}`);
    
    expect(level1Links.length).toBe(3); // Section 1, 2, 3
    expect(level2Links.length).toBe(1); // Subsection 1
  });

  it('handles click navigation', () => {
    render(<FloatingTOC sections={mockSections} />);
    
    // Get the first desktop TOC link specifically
    const desktopToc = document.querySelector(`.${styles.floatingTOC}`);
    const firstLink = desktopToc.querySelector('a[href="#section1"]');
    
    // Mock scrollIntoView
    const mockScrollIntoView = vi.fn();
    Element.prototype.scrollIntoView = mockScrollIntoView;
    
    fireEvent.click(firstLink);
    
    // Element.scrollIntoView should be called
    expect(mockScrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start'
    });
  });

  it('initializes IntersectionObserver', async () => {
    render(<FloatingTOC sections={mockSections} />);
    
    expect(IntersectionObserver).toHaveBeenCalled();
    
    // Wait for the timer to complete before checking observe calls
    await waitFor(() => {
      const observerInstance = IntersectionObserver.mock.results[0].value;
      expect(observerInstance.observe).toHaveBeenCalledTimes(mockSections.length);
    });
  });

  it('shows mobile toggle button on small screens', () => {
    // Mock window.matchMedia for mobile detection
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: query.includes('max-width: 1024px'),
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    render(<FloatingTOC sections={mockSections} />);
    
    const mobileToggle = screen.getByLabelText('Toggle table of contents');
    expect(mobileToggle).toBeInTheDocument();
  });

  it('handles mobile drawer interactions', async () => {
    render(<FloatingTOC sections={mockSections} />);
    
    const mobileToggle = screen.getByLabelText('Toggle table of contents');
    fireEvent.click(mobileToggle);
    
    // Check if drawer opens (use CSS Module class)
    await waitFor(() => {
      const drawer = document.querySelector(`.${styles.mobileDrawer}`);
      expect(drawer).toHaveClass(styles.open);
    });
  });

  it('handles escape key for mobile drawer', async () => {
    render(<FloatingTOC sections={mockSections} />);
    
    // Open mobile drawer first
    const mobileToggle = screen.getByLabelText('Toggle table of contents');
    fireEvent.click(mobileToggle);
    
    // Wait for drawer to open
    await waitFor(() => {
      const drawer = document.querySelector(`.${styles.mobileDrawer}`);
      expect(drawer).toHaveClass(styles.open);
    });
    
    // Press escape key
    fireEvent.keyDown(document, { key: 'Escape' });
    
    // Drawer should close (state management test)
    await waitFor(() => {
      const drawer = document.querySelector(`.${styles.mobileDrawer}`);
      expect(drawer).not.toHaveClass(styles.open);
    });
  });

  it('cleans up observers on unmount', () => {
    const { unmount } = render(<FloatingTOC sections={mockSections} />);
    
    const observerInstance = IntersectionObserver.mock.results[0].value;
    
    unmount();
    
    expect(observerInstance.disconnect).toHaveBeenCalled();
  });

  it('applies custom className', () => {
    const customClass = 'custom-toc-class';
    render(<FloatingTOC sections={mockSections} className={customClass} />);
    
    const tocElement = document.querySelector(`.${styles.floatingTOC}`);
    expect(tocElement).toHaveClass(customClass);
  });

  it('handles active section highlighting', () => {
    const { rerender } = render(<FloatingTOC sections={mockSections} />);
    
    // Simulate IntersectionObserver callback
    const observerCallback = IntersectionObserver.mock.calls[0][0];
    const mockEntries = [
      {
        target: { id: 'section1' },
        isIntersecting: true,
        intersectionRatio: 0.5,
        boundingClientRect: { top: 100 }
      }
    ];
    
    observerCallback(mockEntries);
    
    rerender(<FloatingTOC sections={mockSections} />);
    
    // Check if section1 link has active class in desktop TOC
    const desktopToc = document.querySelector(`.${styles.floatingTOC}`);
    const activeLink = desktopToc.querySelector('a[href="#section1"]');
    expect(activeLink).toHaveClass(styles.active);
  });
});
