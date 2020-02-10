import {Component, OnInit} from '@angular/core';
import {Package} from "../../models/package.model";
import {ActivatedRoute, Router} from "@angular/router";
import {PackagesService} from "../../services/packages/packages.service";

@Component({
  selector: 'app-view-package',
  templateUrl: './view-package.component.html',
  styleUrls: ['./view-package.component.scss']
})
export class ViewPackageComponent implements OnInit {
  package: Package;

  constructor(private route: ActivatedRoute,
              private packagesService: PackagesService,
              private router: Router) {
  }

  ngOnInit() {
    this.package = new Package(0, '', 1, true, '', '', 5, '', false, 0);
    const id = this.route.snapshot.params.id;
    this.packagesService.findPackageById(+id).then(
      (packages: Package) => {
        this.package = packages;
      }
    )
    ;
  }

  onBack() {
    this.router.navigate(['/packages']);
  }
}
