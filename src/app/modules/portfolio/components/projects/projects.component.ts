import { Component, signal } from '@angular/core';

import { IProject } from '../../interfaces/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
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
}
