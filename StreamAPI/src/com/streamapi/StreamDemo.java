package com.streamapi;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class StreamDemo {

    public void streamDemo(){
        List<Movies> movies = List.of(
                new Movies("a",30, Genre.ACTION),
                new Movies("d",10, Genre.FANTACY),
                new Movies("h",50, Genre.SCIFI),
                new Movies("s",20, Genre.ACTION),
                new Movies("c",40, Genre.ROMANTIC)
        );


        IntStream.range(1,5)
                .forEach(System.out::println);




/*

        var partitonResult = movies.stream()
                .collect(Collectors.partitioningBy(m -> m.getLikes() > 20 , Collectors.mapping(Movies::getTitle , Collectors.joining(","))));

        System.out.println("Partition : " + partitonResult);



        var genericResult = movies.stream()
                .collect(Collectors.groupingBy(Movies::getGenre,Collectors.toSet())); // find Sets
        //        .collect(Collectors.groupingBy(Movies::getGenre,Collectors.counting())); // find counts {SCIFI=h, ACTION=a,s, ROMANTIC=c, FANTACY=d}
        //       .collect(Collectors.groupingBy(Movies::getGenre,Collectors.mapping(Movies::getTitle,Collectors.joining(",")))); //find by commas {SCIFI=h, ACTION=a,s, ROMANTIC=c, FANTACY=d}



        System.out.println(genericResult);



        var result = movies.stream()
                .filter(m -> m.getLikes() > 10)
                .map(Movies::getTitle)
                .collect(Collectors.joining(",")); //Collect by commas  eg : a,h,s,c
        System.out.println(result);





        var collectorResult = movies.stream()
                .filter(m -> m.getLikes() > 10)
                .collect(Collectors.summarizingInt(Movies::getLikes)); //FInd count min max avg sum
              //  .collect(Collectors.toMap(Movies::getTitle, m -> m.getLikes())); //to map lambda fn
               // .collect(Collectors.toMap(m -> m.getTitle(), m -> m.getLikes())); // toMap
                //.collect(Collectors.toList());  //toList
                //.collect(Collectors.toSet());   //toSet
        System.out.println(collectorResult);


        // Find Accumulator
        Optional<Integer> sum = movies.stream()
                .map(m -> m.getLikes())
                .reduce(Integer::sum);

        System.out.println("total : "+ sum.get());




        var result = movies.stream()
                .allMatch(m -> m.getLikes() <20);
        System.out.println(result);


        var maxLike = movies.stream()
                .max(Comparator.comparing(Movies::getLikes));
        System.out.println("Maximum likes" + maxLike.get());

        movies.stream()
                .filter(m -> m.getLikes()>10)
                .peek(m -> System.out.println("filtered "+m.getTitle()))
                .map(Movies::getTitle)
                .peek(t -> System.out.println("mappped "+t))
                .forEach(System.out::println);



        movies.stream()
                .skip(2)
                .forEach(m -> System.out.println(m.getTitle()));




        Predicate<Movies> isPopular = m -> m.getLikes() > 10;
        movies.stream()
                .filter(isPopular)
                .forEach(m -> System.out.println(m.getTitle()));



        movies.stream()
                .filter(m -> m.getLikes() > 10)
                .forEach(m -> System.out.println(m.getTitle()));



        movies.stream()
                .map(movie -> movie.getTitle() )
                .forEach(name -> System.out.println(name));


         */
    }
}
