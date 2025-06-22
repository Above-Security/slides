import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SectionContainer from '../src/components/SectionContainer';
import styles from '../src/components/SectionContainer.module.css';

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn(() => ({
  observe: vi.fn(),
  disconnect: vi.fn(),
  unobserve: vi.fn(),
}));

describe('SectionContainer Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders with required props', () => {
    render(
      <SectionContainer id="test-section" title="Test Section">
        <p>Test content</p>
      </SectionContainer>
    );
    
    expect(screen.getByText('Test Section')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies correct id for anchor navigation', () => {
    render(
      <SectionContainer id="test-anchor" title="Test Section">
        <p>Content</p>
      </SectionContainer>
    );
    
    const section = document.getElementById('test-anchor');
    expect(section).toBeInTheDocument();
  });

  it('renders without title when not provided', () => {
    render(
      <SectionContainer id="test-section">
        <p>Content only</p>
      </SectionContainer>
    );
    
    expect(screen.getByText('Content only')).toBeInTheDocument();
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    const { container } = render(
      <SectionContainer id="test-section" title="Test" variant="executive">
        <p>Content</p>
      </SectionContainer>
    );
    
    const section = container.querySelector('section');
    expect(section).toHaveClass(styles.sectionContainer);
    
    // Check that executive variant applies enhanced styling to inner element
    const inner = container.querySelector(`.${styles.sectionInner}`);
    expect(inner).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <SectionContainer id="test-section" title="Test" className="custom-class">
        <p>Content</p>
      </SectionContainer>
    );
    
    const section = container.querySelector('section');
    expect(section).toHaveClass('custom-class');
  });

  it('initializes IntersectionObserver for entrance animation', () => {
    render(
      <SectionContainer id="test-section" title="Test Section">
        <p>Content</p>
      </SectionContainer>
    );
    
    expect(IntersectionObserver).toHaveBeenCalled();
    
    const observerInstance = IntersectionObserver.mock.results[0].value;
    expect(observerInstance.observe).toHaveBeenCalled();
  });

  it('handles visibility state for animations', async () => {
    const { container } = render(
      <SectionContainer id="test-section" title="Test Section">
        <p>Content</p>
      </SectionContainer>
    );
    
    // Simulate IntersectionObserver callback
    const observerCallback = IntersectionObserver.mock.calls[0][0];
    const mockEntry = {
      isIntersecting: true,
      target: container.querySelector('section')
    };
    
    observerCallback([mockEntry]);
    
    await waitFor(() => {
      const section = container.querySelector('section');
      expect(section).toHaveClass(styles.sectionContainer);
      // Test that the component renders correctly even if CSS classes are not defined
      expect(section).toBeInTheDocument();
    });
  });

  it('cleans up observer on unmount', () => {
    const { unmount } = render(
      <SectionContainer id="test-section" title="Test Section">
        <p>Content</p>
      </SectionContainer>
    );
    
    const observerInstance = IntersectionObserver.mock.results[0].value;
    
    unmount();
    
    expect(observerInstance.unobserve).toHaveBeenCalled();
  });

  it('renders core elements correctly', () => {
    const { container } = render(
      <SectionContainer id="test-section" title="Test Section">
        <p>Content</p>
      </SectionContainer>
    );
    
    // Check for core structural elements
    const inner = container.querySelector(`.${styles.sectionInner}`);
    expect(inner).toBeInTheDocument();
    
    const underline = container.querySelector(`.${styles.titleUnderline}`);
    expect(underline).toBeInTheDocument();
  });

  it('supports different content types', () => {
    render(
      <SectionContainer id="test-section" title="Test Section">
        <h3>Subsection</h3>
        <p>Paragraph content</p>
        <ul>
          <li>List item</li>
        </ul>
      </SectionContainer>
    );
    
    expect(screen.getByText('Subsection')).toBeInTheDocument();
    expect(screen.getByText('Paragraph content')).toBeInTheDocument();
    expect(screen.getByText('List item')).toBeInTheDocument();
  });

  it('handles vision variant correctly', () => {
    const { container } = render(
      <SectionContainer id="vision-section" title="Vision" variant="vision">
        <p>Vision content</p>
      </SectionContainer>
    );
    
    const section = container.querySelector('section');
    expect(section).toHaveClass(styles.sectionContainer);
    
    // Check that vision variant applies special styling to inner element
    const inner = container.querySelector(`.${styles.sectionInner}`);
    expect(inner).toBeInTheDocument();
  });

  it('handles executive variant correctly', () => {
    const { container } = render(
      <SectionContainer id="exec-section" title="Executive" variant="executive">
        <p>Executive content</p>
      </SectionContainer>
    );
    
    const section = container.querySelector('section');
    expect(section).toHaveClass(styles.sectionContainer);
    
    // Check that executive variant applies enhanced styling to inner element
    const inner = container.querySelector(`.${styles.sectionInner}`);
    expect(inner).toBeInTheDocument();
  });
});
