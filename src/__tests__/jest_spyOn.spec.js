import * as app from "../App";
import * as math from "../components/math.js/Math";

describe('scenario_1' , () => {
  test("calls math.add", () => {
    const addMock = jest.spyOn(math, "add");
  
    // calls the original implementation
    expect(app.doAdd(1, 2)).toEqual(3);
  
    // and the spy stores the calls to add
    expect(addMock).toHaveBeenCalledWith(1, 2);
  });
})

describe('scenario_2' , () => {
  test("calls math.add", () => {
    const addMock = jest.spyOn(math, "add");
  
    // override the implementation
    addMock.mockImplementation(() => "mock");
    expect(app.doAdd(1, 2)).toEqual("mock");
  
    // restore the original implementation
    addMock.mockRestore();
    expect(app.doAdd(1, 2)).toEqual(3);
  });
})

describe('We can achieve the same goal by jest.fn()' , () => {
  test("calls math.add", () => {
    // store the original implementation
    const originalAdd = math.add;
  
    // mock add with the original implementation
    math.add = jest.fn(originalAdd);
  
    // spy the calls to add
    expect(app.doAdd(1, 2)).toEqual(3);
    expect(math.add).toHaveBeenCalledWith(1, 2);
  
    // override the implementation
    math.add.mockImplementation(() => "mock");
    expect(app.doAdd(1, 2)).toEqual("mock");
    expect(math.add).toHaveBeenCalledWith(1, 2);
  
    // restore the original implementation
    math.add = originalAdd;
    expect(app.doAdd(1, 2)).toEqual(3);
  });
})