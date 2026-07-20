const fs = require("fs");
const { BetaAnalyticsDataClient } = require("@google-analytics/data");

const credentials = JSON.parse(process.env.GA_SERVICE_ACCOUNT);

const client = new BetaAnalyticsDataClient({
    credentials,
});

async function run() {

    const [response] = await client.runRealtimeReport({

        property: `properties/${process.env.GA_PROPERTY_ID}`,

        metrics: [
            {
                name: "activeUsers"
            }
        ]

    });

    const activeUsers =
        Number(response.rows?.[0]?.metricValues?.[0]?.value || 0);

    fs.writeFileSync(
        "stats.json",
        JSON.stringify({
            activeUsers,
            updated: new Date().toISOString()
        }, null, 2)
    );
}

run();


fetch("../stats.json")
.then(r => r.json())
.then(data => {
    document.getElementById("activeUsers").textContent =
        data.activeUsers;
});