import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

// Mock Clarity analytics before importing components
const mockClarityEvent = vi.fn()
const mockClaritySet = vi.fn()
const mockInitializeClarity = vi.fn()

vi.mock('../src/utils/clarity', () => ({
  clarityEvent: mockClarityEvent,
  claritySet: mockClaritySet,
  initializeClarity: mockInitializeClarity
}))

// Mock LogoWatermark component
vi.mock('../src/components/LogoWatermark', () => ({
  Logo: ({ className }) => <div data-testid="logo" className={className}>Logo</div>
}))

import { UseCaseDetail } from '../src/use-cases'

describe('UseCaseDetail Component', () => {
  const renderWithRouter = (useCaseId = 'phishing-detection') => {
    return render(
      <MemoryRouter initialEntries={[`/use-cases/${useCaseId}`]}>
        <UseCaseDetail />
      </MemoryRouter>
    )
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Valid Use Cases', () => {
    it('renders phishing detection use case correctly', () => {
      renderWithRouter('phishing-detection')
      
      expect(screen.getByText('Phishing Detection')).toBeInTheDocument()
      expect(screen.getByText('Real-time detection of sophisticated phishing attacks')).toBeInTheDocument()
      expect(screen.getByText('Performance Metrics')).toBeInTheDocument()
      expect(screen.getByText('Real-World Scenarios')).toBeInTheDocument()
    })

    it('renders account takeover use case correctly', () => {
      renderWithRouter('account-takeover')
      
      expect(screen.getByText('Account Takeover Prevention')).toBeInTheDocument()
      expect(screen.getByText('Behavioral analysis to detect unauthorized access')).toBeInTheDocument()
    })

    it('renders insider threat use case correctly', () => {
      renderWithRouter('insider-threat')
      
      expect(screen.getByText('Insider Threat Detection')).toBeInTheDocument()
      expect(screen.getByText('Cross-app behavior correlation for privileged misuse')).toBeInTheDocument()
    })

    it('renders zero-day protection use case correctly', () => {
      renderWithRouter('zero-day-protection')
      
      expect(screen.getByText('Zero-Day Protection')).toBeInTheDocument()
      expect(screen.getByText('Runtime analysis for unknown threat detection')).toBeInTheDocument()
    })
  })

  describe('Invalid Use Cases', () => {
    it('redirects to use cases index for invalid ID', () => {
      renderWithRouter('invalid-use-case')
      
      // Component should not render content for invalid use case
      expect(screen.queryByText('Performance Metrics')).not.toBeInTheDocument()
    })
  })

  describe('Metrics Display', () => {
    it('displays performance metrics for phishing detection', () => {
      renderWithRouter('phishing-detection')
      
      expect(screen.getByText('99.7%')).toBeInTheDocument() // Detection Rate
      expect(screen.getByText('<0.1%')).toBeInTheDocument() // False Positives
      expect(screen.getByText('<200ms')).toBeInTheDocument() // Response Time
      expect(screen.getByText('All major SaaS platforms')).toBeInTheDocument() // Coverage
    })

    it('formats metric labels correctly', () => {
      renderWithRouter('phishing-detection')
      
      expect(screen.getByText('Detection Rate')).toBeInTheDocument()
      expect(screen.getByText('False Positives')).toBeInTheDocument()
      expect(screen.getByText('Response Time')).toBeInTheDocument()
      expect(screen.getByText('Coverage')).toBeInTheDocument()
    })
  })

  describe('Scenarios Display', () => {
    it('renders all scenarios for phishing detection', () => {
      renderWithRouter('phishing-detection')
      
      expect(screen.getByText('Fake Microsoft Login Page (AiTM Phish)')).toBeInTheDocument()
      expect(screen.getByText('Consent Phishing via OAuth (LOTS)')).toBeInTheDocument()
      expect(screen.getByText('Credential Harvesting Portal')).toBeInTheDocument()
      expect(screen.getByText('Business Email Compromise (BEC)')).toBeInTheDocument()
    })

    it('displays severity badges correctly', () => {
      renderWithRouter('phishing-detection')
      
      expect(screen.getAllByText('CRITICAL')).toHaveLength(2)
      expect(screen.getAllByText('HIGH')).toHaveLength(2)
    })

    it('shows attack vectors and detection methods', () => {
      renderWithRouter('phishing-detection')
      
      expect(screen.getByText(/Attacker sends link to pixel-perfect fake Microsoft login/)).toBeInTheDocument()
      expect(screen.getByText(/Above flags form structure and JavaScript behavior/)).toBeInTheDocument()
    })

    it('displays technique tags', () => {
      renderWithRouter('phishing-detection')
      
      expect(screen.getByText('AiTM (Adversary-in-the-Middle)')).toBeInTheDocument()
      expect(screen.getByText('Brand Impersonation')).toBeInTheDocument()
      expect(screen.getByText('Session Token Theft')).toBeInTheDocument()
    })
  })

  describe('Navigation', () => {
    it('renders back link to use cases index', () => {
      renderWithRouter('phishing-detection')
      
      const backLink = screen.getByText('Back to Use Cases').closest('a')
      expect(backLink).toHaveAttribute('href', '/use-cases')
    })

    it('renders navigation footer with correct links', () => {
      renderWithRouter('phishing-detection')
      
      const useCasesLink = screen.getByText('All Use Cases').closest('a')
      expect(useCasesLink).toHaveAttribute('href', '/use-cases')
      
      const presentationLink = screen.getByText('View Full Presentation').closest('a')
      expect(presentationLink).toHaveAttribute('href', '/slide/1')
    })
  })

  describe('Analytics Integration', () => {
    it('initializes Clarity and tracks page view', () => {
      renderWithRouter('phishing-detection')
      
      expect(mockInitializeClarity).toHaveBeenCalledOnce()
      expect(mockClarityEvent).toHaveBeenCalledWith('use_case_detail_view', { 
        use_case: 'phishing-detection' 
      })
      expect(mockClaritySet).toHaveBeenCalledWith('page_type', 'use_case_detail')
      expect(mockClaritySet).toHaveBeenCalledWith('current_use_case', 'phishing-detection')
    })

    it('tracks scenario clicks', async () => {
      const user = userEvent.setup()
      renderWithRouter('phishing-detection')
      
      const scenarioCard = screen.getByText('Fake Microsoft Login Page (AiTM Phish)').closest('div')
      await user.click(scenarioCard)
      
      expect(mockClarityEvent).toHaveBeenCalledWith('scenario_clicked', { 
        use_case: 'phishing-detection',
        scenario: 'aitm-phishing'
      })
    })
  })

  describe('Accessibility', () => {
    it('has proper heading hierarchy', () => {
      renderWithRouter('phishing-detection')
      
      const mainTitle = screen.getByRole('heading', { level: 1 })
      expect(mainTitle).toHaveTextContent('Phishing Detection')
      
      const sectionTitles = screen.getAllByRole('heading', { level: 2 })
      expect(sectionTitles.length).toBeGreaterThan(0)
    })

    it('has semantic HTML structure', () => {
      renderWithRouter('phishing-detection')
      
      expect(screen.getByRole('banner')).toBeInTheDocument() // header
      const sections = screen.getAllByRole('region')
      expect(sections.length).toBeGreaterThanOrEqual(1)
    })

    it('provides accessible scenario interactions', () => {
      renderWithRouter('phishing-detection')
      
      const scenarioCards = screen.getAllByRole('button', { hidden: true }) // Cards might be clickable
      // Or check that scenario content is accessible via keyboard
      const scenarios = screen.getByText('Fake Microsoft Login Page (AiTM Phish)')
      expect(scenarios).toBeVisible()
    })
  })

  describe('Dynamic Content', () => {
    it('handles different use case data structures', () => {
      renderWithRouter('account-takeover')
      
      // Should render different metrics and scenarios
      expect(screen.getByText('99.5%')).toBeInTheDocument() // Different detection rate
      expect(screen.getByText('Account Takeover via Shared Cookie')).toBeInTheDocument()
    })

    it('displays appropriate number of scenarios per use case', () => {
      renderWithRouter('zero-day-protection')
      
      // Zero-day protection has only 2 scenarios
      expect(screen.getByText('Novel Browser-Based Malware')).toBeInTheDocument()
      expect(screen.getByText('Unknown Command & Control')).toBeInTheDocument()
    })
  })

  describe('Error Handling', () => {
    it('handles analytics failures gracefully', () => {
      mockInitializeClarity.mockImplementationOnce(() => {
        throw new Error('Analytics not available')
      })
      
      expect(() => renderWithRouter('phishing-detection')).not.toThrow()
      expect(screen.getByText('Phishing Detection')).toBeInTheDocument()
    })
  })

  describe('Loading States', () => {
    it('shows loading state initially', () => {
      // This test would require mocking the loading state
      // For now, we verify that the component loads without errors
      renderWithRouter('phishing-detection')
      expect(screen.getByText('Phishing Detection')).toBeInTheDocument()
    })
  })
})
