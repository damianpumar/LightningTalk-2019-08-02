import React from "react";
import { Card } from "material-ui/Card";
import { ViewTitle } from "admin-on-rest/lib/mui";
import SimpleLine from '../charts/simpleLine';
import DashedLine from '../charts/dashedLine';
import SynchronizedLine from '../charts/synchronizedLine';
import StackedArea from '../charts/stackedArea';
import Pie from '../charts/pie';
import JointLineScatter from '../charts/jointLineScatter';
import PieChartWithPaddingAngle from '../charts/pieChartWithPaddingAngle';
import CustomContentTreemap from '../charts/customContentTreemap';
import SimpleRadialBarChart from '../charts/simpleRadialBarChart';

export default () => (
  <Card>
    <ViewTitle title="Dashboard" />
    <h4>Pie AreaCharts</h4>
    <Pie />
    <h4>Pie with padding</h4>
    <PieChartWithPaddingAngle />
    <h4>Treemap</h4>
    <CustomContentTreemap />
    <h4>Radial bar</h4>
    <SimpleRadialBarChart />
    <h4>Joint line scatter</h4>
    <JointLineScatter />
    <h4>StackedArea</h4>
    <StackedArea />
    <h4>Simple line Chart</h4>
    <SimpleLine />
    <h4>Dased line Chart</h4>
    <DashedLine />
    <h4>Synchronized AreaCharts</h4>
    <SynchronizedLine />
  </Card>
);
