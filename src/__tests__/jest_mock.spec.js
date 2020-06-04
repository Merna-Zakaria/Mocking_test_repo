import * as app from '../App';
import * as math from '../components/math.js/Math';
// import axios from 'axios';
import axios from '../models/__mocks__/axios';


// set all module functions to jest.fn
jest.mock('../components/math.js/Math');

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});
// //////////////////////////////////////////////////////////////////////////////////////////

jest.mock('axios');
 
describe('fetchData', () => {
  test('fetches successfully data from an API', async () => {
    const data = {
      data: {
        hits: [
          {
            objectID: '1',
            title: 'a',
          },
          {
            objectID: '2',
            title: 'b',
          },
        ],
      },
    };
 
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
  });
 
  test('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';
 
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
  });
});
