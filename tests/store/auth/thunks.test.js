import { checkingCredentials } from "../../../src/store/auth";
import { checkingAuthentication } from "../../../src/store/auth/thunks";


jest.mock('../../../src/firebase/providers');

describe('Pruebas de AuthThunks', () => {

  test('debe de invocar el checkinCredentials', async() => {

    const dispatch = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    await checkingAuthentication()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());

  });


});