import React from 'react';
import './cardContainer.css'
import {getCards} from '../../services/cardServices'
import { Card } from './../../components/card/card';
import CardHeader from '../../components/cardheader/cardheader';
import Search from '../../components/search/search';
import { hideSpinner, showSpinner } from '../../services/spinnerServices';

class CardContainer extends  React.Component {

    state = {
        cards: [],
        currentPage: 0,
        totalItems: 0,
        search:"",
    }

    componentDidMount = () => {
        this.getCards();
        document.addEventListener("scroll", this.scrollHandler.bind(this));     
    }

    scrollHandler = (event) => {    
        const bottom = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
        if (bottom && this.state.totalItems !== this.state.cards.length) {      
          console.log("BOTTOM REACHED:",bottom); 
          this.setState(prevState => ({
              currentPage: prevState.currentPage + 1
          }))
        }    
      }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.search !== this.state.search || 
            prevState.currentPage !== this.state.currentPage)
                this.getCards();
            
    }

    async getCards() {
        try {
            showSpinner();
            const result = await getCards(this.state.currentPage, this.state.search)
            const oldCards = this.state.cards;
            oldCards.push(...result.cards)
            
            this.setState({
                cards: oldCards,
                totalItems: result._totalCount
            })

            hideSpinner();
        }
        catch (e) {
            hideSpinner();
            console.log(e);
        }
    }
        

    filterItems = (event, val) => {
        event.preventDefault();
        this.setState({
            totalItems: 0, 
            currentPage: 0,
            cards: [],
            search: val
        })
        return false;
    }

    render() {
        let cardList = null;       
        if (this.state.cards.length !== 0) {
            cardList = this.state.cards.map((card, index) => {
                return (<Card key={`${card.id}_${index}`} {...card} ></Card>)
            })
        }

        return (
            <div >
                <div className="cardHeader">
                    <CardHeader itemsCount={this.state.cards.length}
                                totalItems={this.state.totalItems}>
                    </CardHeader>
                    <Search searchHandler={(event, search) => this.filterItems(event, search)}
                            serachText={this.state.search} >
                    </Search>
                </div>
                <div className="cardHolder">
                    {cardList}
                </div>
             
            </div>
        )
    }
}

export default CardContainer;
