import { User } from '@/types';

export const getUserDetails = async (id: string) => {
  const res = await fetch(`https://randomuser.me/api/?seed=${id}`);
  const data: { results: User[] } = await res.json();
  return data.results[0];
};
