<?php

namespace App\Controller;

use App\Entity\Experiencia;
use App\Form\ExperienciaType;
use App\Repository\ExperienciaRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/experiencia')]
class ExperienciaController extends AbstractController
{
    #[Route('/', name: 'app_experiencia_index', methods: ['GET'])]
    public function index(ExperienciaRepository $experienciaRepository): Response
    {
        return $this->render('experiencia/index.html.twig', [
            'experiencias' => $experienciaRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_experiencia_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ExperienciaRepository $experienciaRepository): Response
    {
        $experiencium = new Experiencia();
        $form = $this->createForm(ExperienciaType::class, $experiencium);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $experienciaRepository->save($experiencium, true);

            return $this->redirectToRoute('app_experiencia_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('experiencia/new.html.twig', [
            'experiencium' => $experiencium,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_experiencia_show', methods: ['GET'])]
    public function show(Experiencia $experiencium): Response
    {
        return $this->render('experiencia/show.html.twig', [
            'experiencium' => $experiencium,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_experiencia_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Experiencia $experiencium, ExperienciaRepository $experienciaRepository): Response
    {
        $form = $this->createForm(ExperienciaType::class, $experiencium);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $experienciaRepository->save($experiencium, true);

            return $this->redirectToRoute('app_experiencia_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('experiencia/edit.html.twig', [
            'experiencium' => $experiencium,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_experiencia_delete', methods: ['POST'])]
    public function delete(Request $request, Experiencia $experiencium, ExperienciaRepository $experienciaRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$experiencium->getId(), $request->request->get('_token'))) {
            $experienciaRepository->remove($experiencium, true);
        }

        return $this->redirectToRoute('app_experiencia_index', [], Response::HTTP_SEE_OTHER);
    }
}
