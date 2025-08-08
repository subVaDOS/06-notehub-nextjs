'use client';

export type ErrorProps = {
  error: Error;
};

export default function Error({ error }: ErrorProps) {
  return <p>Could not fetch note details. {error.message}</p>;
}
// error, !note
<p>Something went wrong.</p>;
