/**
 * @author Vighnesh Raut <rvighnes@amazon.com>
 */

import Router from "next/router";
import {useEffect} from "react";

export default function RedirectToStaticPropsPage() {
  useEffect(() => {
    Router.replace('/staticProps').then();
  }, []);

  return null;
}
