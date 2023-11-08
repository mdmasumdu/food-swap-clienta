

const Whyshares = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-4xl mt-10 mb-5">Why Should You Share Food?</h1>
            
            <div className="md:flex p-5 gap-5">
                <div className="flex-1 flex flex-col justify-center items-center">
                   <h1 className="text-3xl font-bold text-orange-600 mb-5">Reduce Food Waste</h1>
                    <p>When people share food, they rescue perfectly good items from being discarded and wasted. This act not only conserves valuable resources but also has a positive impact on the environment by lowering the carbon footprint associated with discarded food. Sharing food, in this context, is an environmentally responsible practice that helps make our food consumption more sustainable.</p>

                </div>

                <div className="flex-1">
                    <img src={"https://i.ibb.co/7jw6xjW/3886207.jpg"} alt="" />
                </div>
            </div>
            <div className="md:flex md:flex-row-reverse p-5 gap-5">
                <div className="flex-1 flex flex-col justify-center items-center">
                   <h1 className="text-3xl font-bold text-orange-600 mb-5">Fight Hunger</h1>
                    <p>When individuals share food, they extend a helping hand to those who are in need. This act of generosity nourishes both the bodies and the spirits of those facing hunger. It underscores the fundamental idea that we are part of a collective community, bound by our shared humanity, and that sharing food is a compassionate response to alleviate the suffering of others.</p>

                </div>

                <div className="flex-1">
                    <img src={"https://i.ibb.co/dJLGjcw/begging-bridge-with-person-who-handed-bread.jpg"} alt="" />
                </div>
            </div>
            <div className="md:flex p-5 gap-5">
                <div className="flex-1 flex flex-col justify-center items-center">
                   <h1 className="text-3xl font-bold text-orange-600 mb-5">Build a community</h1>
                    <p>When people come together to share food, it is not just about the act of nourishing their bodies; it is also a way of nurturing their relationships. Food sharing creates an environment where diverse individuals can connect, interact, and share experiences. This communal aspect of sharing food enriches the lives of those involved and promotes a deeper sense of togetherness, bridging cultural and social boundaries.</p>

                </div>

                <div className="flex-1">
                    <img src={"https://i.ibb.co/R6ssGZY/hands-holding-earth-csr-business-campaign.jpg"} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Whyshares;