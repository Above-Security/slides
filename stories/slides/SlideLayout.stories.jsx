import SlideLayout from '../../components/slides/SlideLayout';

export default {
  title: 'Slides/SlideLayout',
  component: SlideLayout,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: { control: 'text' },
    slideNumber: { control: 'number' },
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    title: 'Sample Slide Title',
    slideNumber: 1,
    children: 'This is the slide content',
  },
};

export const WithLongTitle = {
  args: {
    title: 'This is a Very Long Slide Title That Should Wrap Properly',
    slideNumber: 2,
    children: 'Content goes here',
  },
};

export const WithComplexContent = {
  args: {
    title: 'Complex Content Slide',
    slideNumber: 3,
    children: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Heading</h2>
        <p className="text-gray-600">This is a paragraph with some text.</p>
        <ul className="list-disc list-inside">
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      </div>
    ),
  },
};