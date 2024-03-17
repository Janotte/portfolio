import { Component, inject, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { EDialogPanelClass } from '../../enums/EDialogPanelClass.enum';
import { IProject } from '../../interfaces/project.interface';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  arrayProjects = signal<IProject[]>([
    {
      src: 'assets/img/projects/portfolio.png',
      alt: 'Projeto Portfólio',
      title: 'Meu Portfólio',
      width: '100px',
      height: '51px',
      description:
        '<p>Este projeto foi criado com intuito de apresentar novos projetos que vierem a ser desenvolvidos.</p>',
      links: [
        {
          name: 'Portfólio',
          href: 'https://janotte.github.io/portfolio/',
        },
      ],
    },
  ]);

  public openDialog(data: IProject) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
