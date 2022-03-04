import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class GeService {
  constructor(@Inject('NEST_SERVICE') private readonly client: ClientProxy) {}
  getHelloMessage(name: string): Observable<string> {
    return this.client.send<string>({ cmd: 'getHelloX' }, name);
  }
}
