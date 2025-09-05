import { ResponsivePie } from "@nivo/pie";

const data = [
    { id: "Total Funding", value: 30 },
    { id: "Total Spendings", value: 20 },
    { id: "Monthly Burn", value: 35 },
    { id: "Remaining Funds", value: 15 },
];

// Colors from your UI
const colors = ["#E07A5F", "#6B705C", "#F2CC8F", "#EDE0D4"];

const MyPieChart = () => (
    <div className="bg-[#FFF8F2] flex flex-col rounded-[20px]">
        <span className=" text-[#333] ml-[23.5px] mt-[18px] text-[22px] font-medium leading-normal tracking-[0.96px] ">
            Pie Chart
        </span>
        <div style={{ height: 300 }} >
            <ResponsivePie
                data={data}
                margin={{ top: 40, right: 120, bottom: 40, left: 120 }}
                innerRadius={0.5}
                padAngle={2.5}
                cornerRadius={12}
                colors={colors}
                borderWidth={1}
                borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}

                // Connector lines (labels outside)
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor="#fff"

                // ✅ Add % sign to values
                valueFormat={(value) => `${value}%`}

                // Animation
                animate={true}
                motionConfig="gentle"

                // Bigger text
                theme={{
                    labels: {
                        text: {
                            fontSize: 16, // Inside labels
                            fontWeight: 600,
                        },
                    },
                    arcLinkLabels: {
                        text: {
                            fontSize: 14, // Outside labels
                            fontWeight: 600,
                        },
                    },
                }}
            />
        </div>
    </div>
);

export default MyPieChart;
