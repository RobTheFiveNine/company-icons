const axios = {
  get: () => Promise.resolve({
    data: [
      {
        name: 'Company A', exchange: 'LSE', ticker: 'COA', ext: '.png',
      },
      {
        name: 'Company B', exchange: 'NSYE', ticker: 'COB', ext: '.jpg',
      },
      {
        name: 'Company C', exchange: 'NASDAQ', ticker: 'COC', ext: '.jpg',
      },
    ],
  }),
};

export default axios;
