import React from "react";

import { Moto_GP_Runs } from "../../display_lines/moto_gp/moto_gp_runs";
import { Futures_Moto_GP } from "../../display_lines/moto_gp/future_moto_gp";
import Moto_GP_PY_STATS from "../../display_lines/moto_gp/moto_gp_py_stats";


export const Moto_GP_ITEMS = () => {
    return (
        <div className="col">
            <div id="events_Moto_gp" className="accordion-collapse collapse" aria-labelledby="racing_1stq_ac" data-bs-parent="#items_tab_master">
                <Moto_GP_Runs/>
            </div>
            <div id="DRIVERS_MOTO_GP" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#items_tab_master">
                <Moto_GP_PY_STATS/>
            </div>
            <div id="features_Moto_GP" className="accordion-collapse collapse" aria-labelledby="features_racing" data-bs-parent="#items_tab_master">
                <Futures_Moto_GP/>
            </div>
        </div>
    )

}