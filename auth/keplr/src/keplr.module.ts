import { Module } from "@nestjs/common";

import { KeplrService } from "./keplr.service";

@Module({
  providers: [KeplrService],
  exports: [KeplrService],
})
export class KeplrModule {}
