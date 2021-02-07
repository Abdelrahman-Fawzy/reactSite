import React, { Component } from 'react'
import Header from './layout/Header'
import Menu from './MenuComponent'
import DishDetail from './DishdetailComponent'
import Contact from './Contact'
import About from './AboutComponent'
import Home from './Home';
import Footer from './layout/footer'
import { DISHES } from '../shared/dishes'
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'
import { COMMENTS } from '../shared/comments'
import { Switch, Route, Redirect } from 'react-router-dom';

class MainComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS,
            comments: COMMENTS,
            selectedDish: null
        }
    }

    onSelectDish(dishID) {
        this.setState({
            selectedDish: dishID
        })
    }
    
    render() {
        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }

        const DishWithId = ({match}) => {
            return (
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishID, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishID, 10))}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/about-us' component={() => <About leaders={this.state.leaders} />} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} /> } />
                    <Route path='/menu/:dishID' component={DishWithId} />
                    <Route exact path="/contact-us" component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                {/* <Menu dishes={this.state.dishes} onClick={(dishID) => {this.onSelectDish(dishID)}} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
                <Footer />
            </div>
        )
    }
}

export default MainComponent
