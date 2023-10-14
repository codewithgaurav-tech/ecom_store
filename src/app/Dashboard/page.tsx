'use client';
import BillboardSection from '../../../components/crousel';
import FeaturedProducts from '../../../components/FeaturedProducts';
import LatestCollection from '../../../components/LatestCollection';
import SubscribeSection from '../../../components/SubscribeSection';
import ProductStore from '../../../components/ProductStore';
import ShippingInformation from '../../../components/ShippingInformation';
import Layout from '../../../components/Layout';
import { useEffect, useState } from 'react';

export default function Home() {
    const [shouldRenderBillboard, setShouldRenderBillboard] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const innerWidth = window.innerWidth;
            setShouldRenderBillboard(innerWidth > 768);
        }
    }, []);
    return (
        <>
            <Layout>
                {shouldRenderBillboard && <BillboardSection></BillboardSection>}
                <FeaturedProducts />
                <LatestCollection />
                <SubscribeSection />
                <ProductStore />
                <ShippingInformation />
            </Layout>
        </>
    )
}
