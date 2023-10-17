import React from 'react';
import vars from '../styles/style.module.scss';

export default function Home() {
  return (
    <main className={vars.grid}>
      <div className={vars.title}>
        <h1>Hello from the other side</h1>
        <h2>My name is Ahmed</h2>
      </div>
      <div>Hi</div>
    </main>
  );
}
