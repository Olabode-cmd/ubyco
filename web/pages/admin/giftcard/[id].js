import React, {useState} from "react";
import {useRouter} from "next/router";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import CheckIcon from "@material-ui/icons/Check";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button";
// import Tasks from "components/Tasks/Tasks.js";
// import CustomTabs from "components/CustomTabs/CustomTabs.js";
// import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Card from "components/Card/Card.js";

import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

function Id() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const router  = useRouter();
  const query = router.query.id

  const [data, setData] = useState({
      img: [],
      comment:'All this card is itunes',
      brand: 'Apple',
      card: 'Itunes 200-400',
      amount: 300,
      user:{
          name: 'femi',
          amount: 30000
      }
  })

  console.log(data);
  return (
    <div>
        <GridContainer>
            <GridItem xs={12} sm={6} md={4}>
                <Card>
                   
                    
                </Card>
            </GridItem>
        </GridContainer>
        
    </div>
  );
}

Id.layout = Admin;

export default Id;
