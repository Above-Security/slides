import UIChrome from '../../components/primitives/UIChrome';

export default {
  title: 'Primitives/UIChrome',
  component: UIChrome,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
    noPadding: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    title: 'Window Title',
    children: 'This is the window content area',
  },
};

export const NoPadding = {
  args: {
    title: 'No Padding Window',
    children: 'Content without padding',
    noPadding: true,
  },
};

export const WithPadding = {
  args: {
    title: 'Padded Window',
    children: 'Content with default padding',
    noPadding: false,
  },
};

export const NoTitle = {
  args: {
    children: 'Window without a title',
  },
};

export const LongTitle = {
  args: {
    title: 'This is a Very Long Window Title That Should Be Truncated Properly',
    children: 'Content area',
  },
};

export const WithComplexContent = {
  args: {
    title: 'Application Window',
    children: (
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-semibold">File</span>
          <span className="text-gray-500">Edit</span>
          <span className="text-gray-500">View</span>
          <span className="text-gray-500">Help</span>
        </div>
        <div className="border-t pt-4">
          <p>Application content goes here...</p>
        </div>
      </div>
    ),
  },
};