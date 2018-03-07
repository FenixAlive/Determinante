#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#define MAX 100

void mostrar_matriz(int matriz[][MAX], int orden);
int determinante(int matriz[][MAX], int orden);
int cofactor(int matriz[][MAX], int orden, int fila, int columna);
void inicializa (int matriz[][MAX]);

int main()
{
   int matriz[MAX][MAX];
   int orden, i, j;
   int cofactores[MAX][MAX];
   inicializa(matriz);
   inicializa(cofactores);

   printf("Ingresa el tamanio de la matriz (maximo %d): ", MAX);
   scanf("%d", &orden);
   while (orden < 0 || orden > MAX) {
   	printf("\nEl orden de la matriz no puede ser mayor que %d\n", MAX);
   	printf("Ingrese nuevamente el orden de la matriz: ");
      scanf("%d", &orden);
   }
    system ("cls");
   for (i = 0; i < orden; i++) {
      for (j = 0; j < orden; j++) {
            printf("\nIngrese los elementos de la matriz:\n\n");
            mostrar_matriz(matriz,orden);
            scanf("%d", &matriz[i][j]);
            system ("cls");
      }
   }

   printf("\nMostrando la matriz ingresada:\n");
   mostrar_matriz(matriz, orden);

   printf("\nEl determinante es: %d\n", determinante(matriz, orden));

   getchar();
   getchar();
   return 0;
}

void mostrar_matriz(int matriz[][MAX], int orden)
{
	int i, j;

	printf("Tamanio: %d\n", orden);
   for (i = 0; i < orden; i++) {
      for (j = 0; j < orden; j++) {
      	printf("\t%d", matriz[i][j]);
      }
      printf("\n");
   }
}


int determinante(int matriz[][MAX], int orden)
{
    int det = 0.0, j;


   if (orden == 1) {
      det = matriz[0][0];
   } else {
      for (j = 0; j < orden; j++) {
            det = det + matriz[0][j] * cofactor(matriz, orden, 0, j);
      }
   }

   return det;
}


int cofactor(int matriz[][MAX], int orden, int fila, int columna)
{
   int submatriz[MAX][MAX];
   int n = orden - 1;
   int i, j;

   int x = 0;
   int y = 0;
   for (i = 0; i < orden; i++) {
      for (j = 0; j < orden; j++) {
         if (i != fila && j != columna) {
            submatriz[x][y] = matriz[i][j];
            y++;
            if (y >= n) {
               x++;
               y = 0;
            }
         }
      }
   }
   return pow(-1.0, fila + columna) * determinante(submatriz, n);
}
void inicializa (int matriz[][MAX]){
int x=0, y=0;
for (x=0;x<MAX;x++)
    for (y=0;y<MAX;y++)
        matriz[x][y]=0;

}
