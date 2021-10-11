import { Body, Controller, Get, Post, Param, Delete } from "@nestjs/common";
import { Show } from "./show.model";
import { ShowsService } from "./shows.service";

@Controller('shows')
export class ShowsController {
    constructor(private ShowsService: ShowsService){}

    @Post()
    addShow(
        @Body('id') showId: string,
        @Body('title') showTitle: string,
        @Body('genre') showGenre: Array<string>
        ):  any {
        const id =  this.ShowsService.insertShow(showId, showTitle, showGenre);
        return { id: id};
    }

    @Get()
    getAllShows(){
        return this.ShowsService.getShows();
    }
    @Get(':genre')
    getShowByGenre(@Param('genre') genre: string){
        return this.ShowsService.getShowsByGenre(genre);
    }
    @Delete(':id')
    removeShow(@Param('id') id:string){

    }
}