export const initialState = {
  status: 'checking', // checking, not-authenticated, authenticated
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null
}

export const authenticatedState = {
  status: 'authenticated',
  uid: '123ABC',
  email: 'test@test.com',
  displayName: 'Test user',
  photoURL: 'https://foto.jpg',
  errorMessage: null
}

export const notAuthenticatedState = {
  status: 'not-authenticated',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null
}

export const demoUser = {
  uid: '123ABC',
  email: 'test@test.com',
  displayName: 'Test user',
  photoURL: 'https://foto.jpg',
}