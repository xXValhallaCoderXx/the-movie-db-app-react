import React from "react";
import {DataTable} from "shared/components";
const styles = require("./home.module.scss");

interface IProps {
  onSubmit: () => void;
  onChange: (event: any) => void;
  value: string;
}

const HomePageView = ({onSubmit, onChange, value}: IProps) => {
  return (
    <div className={styles.home_view_wrapper}>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.search_wrapper}>
            <div className={styles.row}>
              <div className={styles.column}>Search</div>
              <div className={styles.column}>
                <form onSubmit={onSubmit}>
                  <input value={value} onChange={onChange} />
                </form>
              </div>
            </div>
            <div>
              <DataTable />
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.detail_wrapper}>Details</div>
        </div>
      </div>
    </div>
  );
};

export default HomePageView;
