import { Module } from "@nestjs/common";

import { LicenseModule, licenseProvider } from "@ethberry/nest-js-module-license";

import { KeplrService } from "./keplr.service";

@Module({
  imports: [LicenseModule.deferred()],
  providers: [licenseProvider, KeplrService],
  exports: [KeplrService],
})
export class KeplrModule {}
