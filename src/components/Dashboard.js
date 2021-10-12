import AverageRating from "./AverageRating";
import SentimentAnalysis from "./SentimentAnalysis";
import Sidebar from "./Sidebar";
import WebsiteVistors from "./WebsiteVisitors";
import Reviews from "./Reviews";

function Dashboard(props) {
    return (
        <div class="dashBoard">
            <Sidebar />
            <div class="content">
                <div class="contentTopRow">
                <Reviews />
                <AverageRating />
                <SentimentAnalysis />
                </div>
                <div class="contentBottomRow">  
                <WebsiteVistors />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;