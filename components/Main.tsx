import React, { useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import { RouteConfigComponentProps } from 'react-router-config';
import Title from './title';
import styles from './main.module.scss';
import PageStore from '../stores/PageStore';

interface IMainProps extends RouteConfigComponentProps<void> {
  pageStore?: PageStore;
}

const Main = (props: IMainProps) => {
  useEffect(() => {
    const addCount = () => {
      const { pageStore } = props;
      (pageStore as PageStore).add();
    };
    window.addEventListener('click', addCount);
    return () => window.removeEventListener('click', addCount);
  }, [props]);

  return (
    <div className={styles.page}>
      <Title />
    </div>
  );
};

export default inject('pageStore')(observer(Main));
