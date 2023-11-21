export type User = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  cell: string;
  location: {
    city: string;
    country: string;
  };
  picture: {
    large: string;
  };
};
