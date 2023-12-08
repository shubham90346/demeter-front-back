import React from 'react';
import {
    LineChart,
    ResponsiveContainer,
    Legend,
    Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

const pdata = [
    {

        s: 11,

    },
    {

        s: 15,

    },
    {

        s: 5,

    },
    {

        s: 16,

    },
    {

        s: 8,

    },
    {

        s: 12,

    },

];


function NewApp(props) {
    return (
        <div>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata} margin={{ right: 20, left: 18, top: 5 }} width={300}>
                    <CartesianGrid vertical={false}
                        strokeDasharray="0 9" />
                    <XAxis dataKey="name" interval={"preserveStartEnd"} tickLine={false} hide />
                    <YAxis tickLine={false} hide />
                    <Legend />
                    <Tooltip />
                    <Line
                        dataKey="s"
                        stroke="rgb(100,200,255)"
                        activeDot={{ r: 6 }}
                        strokeWidth={2}
                        dot={false}
                        type="monotone"


                    />

                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default NewApp;