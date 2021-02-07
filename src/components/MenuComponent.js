import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'

function RenderItems({dish}) {
    return (
        <Card key={dish.id}>
            <Link to={`/menu/${dish.id}`}>
                <CardImg top width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    )
}

function MenuComponent(props) {
    const menu = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 mt-5">
                <RenderItems dish={dish} />
            </div>
        )
    })
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    )
}


export default MenuComponent
