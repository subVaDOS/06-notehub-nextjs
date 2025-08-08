import styles from './Loading.module.css';
export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
    </div>
  );
}
// This component can be used to show a loading state while data is being fetched.
// It can be imported and used in any page or component where you need to indicate loading,
