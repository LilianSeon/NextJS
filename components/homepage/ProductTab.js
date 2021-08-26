import { useState } from "react";
import Image from 'next/image'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ItemsCarousel from 'react-items-carousel';
import Product from '../Product';

const ProductTab = ({ products }) => {

    const [activeItemIndex, setActiveItemIndex] = useState(0);

    return (
        <div className="sub-col col-sm-12 col-md-12">
            <div className="tt_tabsproduct_module tab-products owl-products">
                <Tabs>
                    <TabList className="tab-heading nav nav-pills">
                        <Tab className="active"><a href="#tab1">Produits populaires</a></Tab>
                        <Tab><a href="#tab2">Title 2</a></Tab>
                    </TabList>

                    <div className="tt-product">
                        <div className="tab-content">
                            <TabPanel id="tab1" className="tab-container owl-carousel owl-theme tab-pane fade owl-loaded owl-drag active in">
                                <div className="owl-stage-outer">
                                    <div className="owl-stage">
                                    <ItemsCarousel
                                        requestToChangeActive={setActiveItemIndex}
                                        activeItemIndex={activeItemIndex}
                                        numberOfCards={4}
                                        gutter={10}
                                        leftChevron={<Image className="arrow-left" height="50" width="50" loader={() => "/assets/images/arrow.png"} src={"/assets/images/arrow.png"} alt={"arrow"} />}
                                        rightChevron={<Image height="50" width="50" loader={() => "/assets/images/arrow.png"} src={"/assets/images/arrow.png"} alt={"arrow"} />}
                                        outsideChevron={false}
                                        chevronWidth={40}
                                    >
                                        {
                                            products.map((product) => {
                                                return <Product key={product.id} product={product}/>
                                            })
                                        }
                                    </ItemsCarousel>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel id="tab2" className="tab-container owl-carousel owl-theme tab-pane fade owl-loaded owl-drag active in">
                                <div className="owl-stage-outer">
                                    <div className="owl-stage">
                                        <h2>Product 2</h2>
                                    </div>
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>
    )

}

export default ProductTab;