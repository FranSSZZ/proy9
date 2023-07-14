<?php

namespace App\Form;

use App\Entity\Formacion;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FormacionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('año')
            ->add('nombre')
            ->add('lugar')
            ->add('descripcion')
            ->add('duracion')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Formacion::class,
        ]);
    }
}
