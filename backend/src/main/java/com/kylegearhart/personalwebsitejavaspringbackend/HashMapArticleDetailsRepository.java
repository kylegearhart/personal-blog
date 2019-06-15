package com.kylegearhart.personalwebsitejavaspringbackend;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Primary
@Repository
class HashMapArticleDetailsRepository implements ArticleDetailsRepository {
  private Map<String, ArticleDetails> articleTitleToDetailsMap = createArticleTitleInURLToDetailsMap();

  public static String standardLoremIpsum =
    "Lorem ipsum dolor sit amet, propriae dissentiet definitionem quo no, quem oportere " +
      "necessitatibus cu sed. Luptatum platonem ut ius. Natum voluptua est eu, impedit m" +
      "aiestatis referrentur in eos. Ex sit tation primis mentitum, vel liber imperdiet " +
      "dissentiunt ex, liber congue complectitur ius ne. Alia salutatus at sed, cu per d" +
      "ico legendos splendide. Nec zril comprehensam te. Nostrum disputando duo ne, quo " +
      "idque iriure accusata te.\n" +
      "\n" +
      "Ei verear blandit vim. Probo interpretaris per ex, per labitur graecis expetenda " +
      "id. Affert probatus senserit sed te, eius comprehensam his id, fabellas sadipscin" +
      "g ut nec. No tale choro graeco sea, mel ne brute fabulas dissentiunt, altera iriu" +
      "re consulatu vim ut. Ius ex noluisse prodesset, ne per affert aperiri accusam, id" +
      " quo docendi recteque. Eam te everti debitis.\n" +
      "\n" +
      "Commodo placerat ei mea, te nec suas esse, tibique oporteat pri ne. Et putent dis" +
      "putationi quo, per ei nemore aeterno persecuti, lucilius praesent nam ut. Nonumes" +
      " definiebas cotidieque qui at. Te vix affert vituperata necessitatibus. Mel purto" +
      " graecis nusquam at, labore quidam aperiam mel ea. Te omnes iriure blandit vix, p" +
      "urto nonumy posidonium vim no.\n" +
      "\n" +
      "Postea numquam usu ei, nam at vivendum invenire, his ut ornatus pertinacia. Has a" +
      "n exerci tempor imperdiet, per cu persecuti adolescens, sadipscing conclusionemqu" +
      "e pro eu. Iudico democritum necessitatibus ex mel, tempor laoreet his ne. At his " +
      "tritani offendit, ut melius dolores insolens qui, ex pri dolore saperet menandri." +
      " Et tota nulla electram sed.\n";
  private static Map<String, ArticleDetails> createArticleTitleInURLToDetailsMap() {
    Map<String, ArticleDetails> map = new HashMap<>();
    map.put(
      "A-Chance-of-Rain",
      new ArticleDetails("A Chance of Rain", standardLoremIpsum)
    );
    map.put(
      "Nomad-Capitalist-Book-Review",
      new ArticleDetails("Nomad Capitalist Book Review", standardLoremIpsum)
    );
    map.put(
      "Do-What-is-Meaningful",
      new ArticleDetails("Do What is Meaningful", standardLoremIpsum)
    );

    return map;
  }

  @Override
  public ArticleDetails getArticleDetails(String articleTitle) {
    return articleTitleToDetailsMap.getOrDefault(
      articleTitle,
      new ArticleDetails("Lorem Ipsum", standardLoremIpsum)
    );
  }
}
