import React, { useContext, useState } from "react";
import DateTime from 'luxon/src/datetime'
import { Context } from "../../store/appContext";

import { Results } from "../../lines/results";



export const Results_Ncaa_Football = () => {
    let away_team="";
    let home_team="";
    const { store } = useContext(Context);
    const dateLux = DateTime.now().day;
    const monthLux = DateTime.now().month;
    const yearLux = DateTime.now().year;
   

    let dateShow =[];
    if(dateLux < 10){
        dateShow.push("0" + dateLux);
    }else{
        dateShow.push(dateLux);
    }

    let monthShow =[];
    if(monthLux < 10){
        monthShow.push("0" + monthLux);
    }else{
        monthShow.push(monthLux);
    }

    const [year, setyear] = useState(yearLux);
    const [month, setmonth] = useState(monthShow);
    const [week, setweek] = useState(dateShow);

    let R_date = year+"-"+month+"-"+week;
    
    let selectYear = [];
    for (let i = 2002; i < 2025; i++) {
        selectYear.push(i);
    }

    let selectMonth = [];
    for (let i = 1; i < 13; i++) {
        if(i < 10){
            selectMonth.push("0"+i);
        }else{
            selectMonth.push(i);
        }
    }

    let selectDay = [];
    for (let i = 1; i < 32; i++) {
        if(i < 10){
            selectDay.push("0"+i);
        }else{
            selectDay.push(i);
        }
    }
    return (
        <div className="col-12" id="sports">
            <div className="title_sport bg_orange_dark text-white p-lg-1 fs-5 font_bold">
                <div className="row g-0">
                    <div className="col-lg-4">Results NFL</div>
                    <div className="col-lg-8">
                    <div className="row g-0">
                            <div className="col-2 text-center">Year</div>
                            <div className="col-lg-2 d-flex align-items-center">
                                <select className="form-select" name="week" aria-label="Default select example" defaultValue={year} onChange={e => setyear(e.target.value)} required>
                                    {
                                        selectYear.map((index) => {
                                            return (
                                                <option key={index} name="promotions" value={index}>{index}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-2 text-center">Month</div>
                            <div className="col-lg-2 d-flex align-items-center">
                                <select className="form-select" name="month" aria-label="Default select example" defaultValue={month} onChange={e => setmonth(e.target.value)} required>
                                    {
                                        selectMonth.map((index) => {
                                            return (
                                                <option key={index} name="month" value={index}>{index}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-2 text-center">Day</div>
                            <div className="col-lg-2 d-flex align-items-center">
                                <select className="form-select" name="week" aria-label="Default select example" defaultValue={week} onChange={e => setweek(e.target.value)} required>
                                    {
                                        selectDay.map((index) => {
                                            return (
                                                <option key={index} name="promotions" value={index}>{index}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div className="accordion-collapse collapse show" id="nflCollapse" data-bs-parent="#sports">
                    <div className="row g-0">
                        {
                            store.ncaa_football.map((item, index) => {
                                if (item.date == R_date) {
                                    let url_aw="";
                                    let url_hm="";
                                    store.logos_nfl.map((item2)=>{
                                        if(item2.team == item.away){
                                            url_aw = item2.url 
                                        }
                                    })
                                    store.logos_nfl.map((item3)=>{
                                        if(item3.team == item.home){
                                            url_hm = item3.url 
                                        }
                                    })

                                    return (
                                        <div className="col-6 p-2" key={index}>
                                            <Results
                                                logo_away={url_aw}
                                                logo_home={url_hm}
                                                away={item.away}
                                                home={item.home}
                                                date={item.date}
                                                final_score_away={item.final_score_away}
                                                final_score_home={item.final_score_home}
                                            />
                                        </div>
                                    );
                                }
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}