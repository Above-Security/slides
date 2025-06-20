import '@testing-library/jest-dom'

// Mock window.location for router tests
delete window.location
window.location = {
    href: 'https://test.com',
    hash: '',
    pathname: '/',
    search: '',
    assign: vi.fn(),
    replace: vi.fn(),
    reload: vi.fn()
}

// Mock Microsoft Clarity
window.clarity = vi.fn()

// Mock console methods to reduce noise in tests
global.console = {
    ...console,
    log: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
}
