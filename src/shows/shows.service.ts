import { Injectable, NotFoundException } from "@nestjs/common";
import { Show } from "./show.model";

@Injectable()
export class ShowsService{
    private shows: Show[] = [];

    insertShow(id:string, title: string, genre:Array<string>){
        const newShow = new Show(id,title,genre);
        this.shows.push(newShow);
        return newShow;
    }

    getShows(){
        return [...this.shows];
    }
    getShowsByGenre(genre: string) {
        const shows =  this.shows.filter((show) => {
             show.genre.forEach((element) => element == genre)
        })
        if(!shows) {
            throw new NotFoundException();
        }
        return {...shows};
    }
    deleteProduct(prodId: string) {
        const index = this.findShow(prodId)[1];
        this.shows.splice(index, 1);
    }
    private findShow(id: string): [Show, number] {
        const showIndex = this.shows.findIndex(show => show.id === id);
        const product = this.shows[showIndex];
        if (!product) {
          throw new NotFoundException('Could not find product.');
        }
        return [product, showIndex];
      }
}