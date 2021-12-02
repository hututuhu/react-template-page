import { observer, inject } from 'mobx-react';
import React from 'react';
import PageStore from '../../stores/PageStore';
import styles from './index.module.scss';

interface ITitleProps {
  pageStore?: PageStore;
}

const Title = inject('pageStore')(
  observer((props: ITitleProps) => {
    const { pageStore } = props;
    const { message } = pageStore as PageStore;
    const { title, count } = message;
    return (
      <>
        <h1 className={styles.title}>{title}</h1>
        <h1 className={styles.title}>点击次数：{count}</h1>
      </>
    );
  }),
);

export default Title;
