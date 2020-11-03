import { Component } from '@angular/core';

interface EnergyModel {
    finyear: string;
    baseload: number;
    renewable: number;
    netbought: number;
    retail: number;
}

@Component({
    selector: 'my-app',
    template: `
        <kendo-chart>
          <kendo-chart-title background="grey" text='AGL' color='white' ></kendo-chart-title>
          <kendo-chart-legend position='bottom' orientation='horizontal'></kendo-chart-legend>
          <kendo-chart-series >
            <kendo-chart-series-item type="column" [stack]="true"  [data]="aglseriesData"  name = "BaseLoad"            
                field="baseload" categoryField="finyear">
                <kendo-chart-series-item-tooltip >  </kendo-chart-series-item-tooltip> 
            </kendo-chart-series-item>
            <kendo-chart-series-item type="column" [stack]="true"  [data]="aglseriesData" name = "Renewable"
                field="renewable" categoryField="finyear">
                <kendo-chart-series-item-tooltip >  </kendo-chart-series-item-tooltip> 
             </kendo-chart-series-item>
            <kendo-chart-series-item type="column" [stack]="true" [data]="aglseriesData" name = "Net Bought" 
                field="netbought" categoryField="finyear" > 
                <kendo-chart-series-item-tooltip >  </kendo-chart-series-item-tooltip>                             
            </kendo-chart-series-item>
             <kendo-chart-series-item type="line"  [data]="aglseriesData" name = "Retail Energy"
                field="retail" categoryField="finyear"> 
               <kendo-chart-series-item-tooltip ></kendo-chart-series-item-tooltip>                                       
            </kendo-chart-series-item>
          </kendo-chart-series>
        </kendo-chart>
    `
})
export class AppComponent {
    public aglseriesData: EnergyModel[] = [{
        finyear: '2019',
        baseload: 200,
        renewable:100,
        netbought:100,
        retail: 180
    }, 
    {
        finyear: '2020',
        baseload: 200,
        renewable:100,
        netbought:100,
        retail:280
    },{
        finyear: '2021',
        baseload: 150,
        renewable:100,
        netbought:250,
        retail: 200
    }];
}
