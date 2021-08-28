import React from 'react';
import App from '@src/components/App';
import renderer, { act } from 'react-test-renderer';
import { Select } from 'react-select-virtualized';

jest.mock('axios');

async function render() {
  let subject;

  await act(async () => {
    subject = renderer.create(
      <App />,
    );
  });

  return subject;
}

it('should render correctly', async () => {
  const subject = await render();
  expect(subject).toMatchSnapshot();
});

describe('when an icon is selected', () => {
  it('should render the icon', async () => {
    const subject = await render();
    const select = subject.root.findByType(Select);
    const item = {
      value: {
        exchange: 'LSE',
        ticker: 'TEST',
        name: 'Test',
        ext: '.jpg',
      },
    };

    act(() => select.props.onChange(item));
    expect(subject).toMatchSnapshot();
  });
});

describe('when an icon is deselected', () => {
  it('should not render an icon', async () => {
    const subject = await render();
    const select = subject.root.findByType(Select);
    const item = {
      value: {
        exchange: 'LSE',
        ticker: 'TEST',
        name: 'Test',
        ext: '.jpg',
      },
    };

    act(() => select.props.onChange(item));
    act(() => select.props.onChange(null));
    expect(subject).toMatchSnapshot();
  });
});
