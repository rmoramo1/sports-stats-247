import { useParams } from 'react-router-dom';
import React, { useContext } from "react";
import { Context } from "../../store/appContext";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


function Offensive_Player_Stats_Ncaa() {
    const params = useParams();
    const { store } = useContext(Context);

    const data = {
        labels: [],
        datasets: [
            {
                label: "PTS",
                data: [],
                backgroundColor: [
                    'rgba(217, 136, 128, 0.8)',
                    'rgba(195, 155, 211, 0.8)',
                    'rgba(127, 179, 213, 0.8)',
                    'rgba(118, 215, 196, 0.8)',
                    'rgba(115, 198, 182, 0.8)',
                    'rgba(248, 196, 113, 0.8)',
                ],
                borderColor: [
                    'rgba(217, 136, 128, 1)',
                    'rgba(195, 155, 211, 1)',
                    'rgba(127, 179, 213, 1)',
                    'rgba(118, 215, 196, 1)',
                    'rgba(115, 198, 182, 1)',
                    'rgba(248, 196, 113, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    store.stats_offensive_player_ncaa_football.map((index) => {
        if (index.name == store.stats_offensive_player_ncaa_football[params.theid].name) {
            data.labels.push(index.season);
        }
    })
    store.stats_offensive_player_ncaa_football.map((index) => {
        if (index.name == store.stats_offensive_player_ncaa_football[params.theid].name) {

            data.datasets[0].data.push(index.pts);

        }
    })



    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <div className="container-fluid border_top">
            <div className="fs-5">
                <div className="row g-0">
                    <div className="col-lg-2 p-2">
                        <img className="img-fluid" src={store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].headshot} alt="headshot of the player"></img>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                        <div className="row g-0">
                            <div className="col-12">
                                {store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].name}
                            </div>
                            <div className="col-12">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].team}</div>
                            <div className="col-12"><span className="fw-bold">Dorsal:</span>  #{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].dorsal}</div>
                            <div className="col-12"><span className="fw-bold">Position:</span>  {store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].position}</div>
                            <div className="col-12"><span className="fw-bold">Season:</span>  {store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].season}</div>
                        </div>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center align-items-center p-1">
                        <div className="row g-0">
                            <div className="col-12"><span className="fw-bold">Birth:</span> {store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].birth}</div>
                            <div className="col-12"><span className="fw-bold">Height:</span>  {store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].height}</div>
                            <div className="col-12"><span className="fw-bold">Weight:</span> {store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].weight}</div>
                        </div>
                    </div>
                    <div className="col-lg-1 d-flex justify-content-center align-items-center">
                        Points per Year
                    </div>
                    <div className="chart mh-25 py-2">
                        <Pie data={data} />
                    </div>
                </div>
            </div>
            <div className="overflowX_scroll">
                <div className="odds-list">
                    <div className="row g-0 bg_lines text-white text-center">
                        <div className="eight_spans">GP</div>
                        <div className="eight_spans">Cmp</div>
                        <div className="eight_spans">Pass Att</div>
                        <div className="eight_spans">Cmp %</div>
                        <div className="eight_spans">Yards</div>
                        <div className="eight_spans">Yards %</div>
                        <div className="eight_spans">Yards PG</div>
                        <div className="eight_spans">Pass TD</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].games}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].Cmp}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].pass_att}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].cmp_AVG}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].yards}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].yards_AVG}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].yards_pg}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].pass_td}</div>
                    </div>
                    <div className="row g-0 bg_lines text-white text-center mt-3">
                        <div className="eight_spans">Int</div>
                        <div className="eight_spans">Sack</div>
                        <div className="eight_spans">SYL</div>
                        <div className="eight_spans">RTG</div>
                        <div className="eight_spans">RAtt</div>
                        <div className="eight_spans">RY</div>
                        <div className="eight_spans">YPR</div>
                        <div className="eight_spans">Big</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].Int}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].asck}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].syl}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].rtg}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].russ_att}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].russ_yards}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].yards_p_r}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].big}</div>
                    </div>
                    <div className="row g-0 text-white text-center mt-3">
                        <div className="eight_spans bg_lines">RTT</div>
                        <div className="eight_spans bg_lines">RYPG</div>
                        <div className="eight_spans bg_lines">Fum</div>
                        <div className="eight_spans bg_lines">Lst</div>
                        <div className="eight_spans bg_lines">FD</div>
                        <div className="eight_spans bg_lines">REC</div>
                        <div className="eight_spans bg_lines">Ttgts</div>
                        <div className="eight_spans bg_lines">R Yards</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].rush_tt}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].rush_yard_pg}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].fum}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].lst}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].fd}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].rec}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].r_tgts}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].r_yards}</div>
                    </div>
                    <div className="row g-0 text-white text-center mt-3">
                        <div className="eight_spans bg_lines">YPR</div>
                        <div className="eight_spans bg_lines">RTD</div>
                        <div className="eight_spans bg_lines">LR</div>
                        <div className="eight_spans bg_lines">RBig</div>
                        <div className="eight_spans bg_lines">RYPG</div>
                        <div className="eight_spans bg_lines">RFL</div>
                        <div className="eight_spans bg_lines">RYAC</div>
                        <div className="eight_spans bg_lines">RFD</div>
                    </div>
                    <div className="row g-0 text-center mt-3">
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].yards_p_r}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].r_td}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].lr}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].r_big}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].r_ypg}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].r_fl}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].r_yac}</div>
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].r_fd}</div>
                    </div>
                    <div className="row g-0 text-white text-center mt-3">
                        <div className="eight_spans bg_lines">PTS</div>
                    </div>
                    <div className="row g-0 text-center">
                        <div className="eight_spans bb1px lines">{store.stats_offensive_player_ncaa_football[params.theid] && store.stats_offensive_player_ncaa_football[params.theid].pts}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Offensive_Player_Stats_Ncaa;