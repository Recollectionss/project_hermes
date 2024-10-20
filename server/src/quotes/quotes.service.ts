import {Injectable} from '@nestjs/common';

@Injectable()
export class QuotesService {

    async getText(){
      try {
          const response = await  fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=json");
          return response.json();
      }catch (e) {
          console.log(e);
          throw e
      }
    }
}
