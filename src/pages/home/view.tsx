import React from "react";
import {SearchBar} from "./components";
import {DataTable} from "shared/components";
const styles = require("./home.module.scss");

interface IProps {
  onSubmit: (event: React.FormEvent) => void;
  onChange: (event: React.FormEvent) => void;
}

const HomePageView = ({onSubmit, onChange}: IProps) => {
  return (
    <div className={styles.home_view_wrapper}>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.search_wrapper}>
            <div className={styles.row}>
              <div className={styles.column}>Search</div>
              <div className={styles.column}>
                <form onSubmit={onSubmit}>
                  <SearchBar onSearchChange={onChange} />
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
