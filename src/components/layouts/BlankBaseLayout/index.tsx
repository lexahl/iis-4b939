import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';

export default function BlankBaseLayout(props) {
    const { page, site } = props;
    const pageMeta = page?.__metadata || {};
    return (
        <div className={classNames('sb-page', pageMeta.pageCssClasses)} data-sb-object-id={pageMeta.id}>
            <Head>
                <title>{page.title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="title" content="Indigenous Innovative Solutions Inc."/>
                    <meta name="description" content="Focuses on Indigenous and social innovation, entrepreneurial mentorship, and community determination that empowers Indigenous people to design their own future."/>                    
                    <meta name="keywords" content="Indigenous, Canada, Community"/>
                    <meta name="robots" content="index, follow"/>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                    <meta name="language" content="English"/>
                    <meta name="author" content="Winona Lafreniere"/>
                {site.favicon && <link rel="icon" href={site.favicon} />}
            </Head>
            {props.children}
        </div>
    );
}
