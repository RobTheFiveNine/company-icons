import React from 'react';
import App from '@src/components/App';
import renderer, { act } from 'react-test-renderer';
import AutoComplete from '@material-ui/lab/Autocomplete';

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

it('should render the dropdown items correctly', async () => {
  const subject = await render();
  const autoComplete = subject.root.findByType(AutoComplete);
  const item = {
    exchange: 'LSE',
    ticker: 'TEST',
    name: 'Test',
    ext: '.jpg',
  };

  const res = autoComplete.props.getOptionLabel(item);
  expect(res).toEqual('Test (LSE:TEST)');
});

describe('when an icon is selected', () => {
  it('should render the icon', async () => {
    const subject = await render();
    const autoComplete = subject.root.findByType(AutoComplete);
    const item = {
      exchange: 'LSE',
      ticker: 'TEST',
      name: 'Test',
      ext: '.jpg',
    };

    act(() => autoComplete.props.onChange(null, item));
    expect(subject).toMatchSnapshot();
  });
});
